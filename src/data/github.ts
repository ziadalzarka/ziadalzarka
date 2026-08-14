const USER = 'ziadalzarka';
const API = 'https://api.github.com';

export type Pulse = {
  repos: number | null;
  stars: number | null;
  followers: number | null;
  releases: Record<string, string>;
  live: boolean;
};

const FALLBACK: Pulse = {
  repos: null,
  stars: null,
  followers: null,
  releases: {},
  live: false,
};

const headers: Record<string, string> = {
  accept: 'application/vnd.github+json',
  'user-agent': 'ziadalzarka.dev-build',
};

if (process.env.GITHUB_TOKEN) {
  headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

async function json(path: string) {
  const res = await fetch(`${API}${path}`, { headers, signal: AbortSignal.timeout(12_000) });
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  return res.json();
}

/** Repos whose latest release tag is worth showing next to the project. */
const TRACKED = ['peel'];

let cached: Promise<Pulse> | null = null;

export function getPulse(): Promise<Pulse> {
  cached ??= load();
  return cached;
}

async function load(): Promise<Pulse> {
  try {
    const [user, repos] = await Promise.all([
      json(`/users/${USER}`),
      json(`/users/${USER}/repos?per_page=100&type=owner&sort=updated`),
    ]);

    const owned = (repos as any[]).filter((r) => !r.fork);
    const stars = owned.reduce((sum, r) => sum + (r.stargazers_count ?? 0), 0);

    const releases: Record<string, string> = {};
    await Promise.all(
      TRACKED.map(async (name) => {
        try {
          const rel = await json(`/repos/${USER}/${name}/releases/latest`);
          if (rel?.tag_name) releases[name] = rel.tag_name;
        } catch {
          /* a repo with no releases is not an error */
        }
      })
    );

    return {
      repos: user.public_repos ?? owned.length,
      stars,
      followers: user.followers ?? null,
      releases,
      live: true,
    };
  } catch (err) {
    console.warn(`[github] live data unavailable, falling back: ${(err as Error).message}`);
    return FALLBACK;
  }
}
