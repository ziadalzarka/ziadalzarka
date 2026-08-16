const USER = 'ziadalzarka';
const API = 'https://api.github.com';

export type Releases = Record<string, string>;

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

let cached: Promise<Releases> | null = null;

export function getReleases(): Promise<Releases> {
  cached ??= load();
  return cached;
}

async function load(): Promise<Releases> {
  const releases: Releases = {};

  await Promise.all(
    TRACKED.map(async (name) => {
      try {
        const rel = await json(`/repos/${USER}/${name}/releases/latest`);
        if (rel?.tag_name) releases[name] = rel.tag_name;
      } catch (err) {
        console.warn(`[github] no release for ${name}: ${(err as Error).message}`);
      }
    })
  );

  return releases;
}
