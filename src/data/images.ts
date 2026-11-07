import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/projects/*/*.webp',
  { eager: true },
);

export interface ProjectImages {
  /** Best single hero shot, or undefined when the project has no UI to show. */
  cover?: ImageMetadata;
  /** Remaining screenshots, in filename order (shot-2, shot-3…). */
  shots: ImageMetadata[];
  /** Everything else, keyed by file name without extension (art-brick, icon-polinexu…). */
  extra: Record<string, ImageMetadata>;
}

export function projectImages(slug: string): ProjectImages {
  const prefix = `/src/assets/projects/${slug}/`;
  const files = Object.entries(modules)
    .filter(([path]) => path.startsWith(prefix))
    .map(([path, mod]) => ({ name: path.slice(prefix.length).replace(/\.webp$/, ''), img: mod.default }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const cover = files.find((f) => f.name === 'cover')?.img;
  const shots = files.filter((f) => /^shot-\d+$/.test(f.name)).map((f) => f.img);
  const extra = Object.fromEntries(
    files.filter((f) => f.name !== 'cover' && !/^shot-\d+$/.test(f.name)).map((f) => [f.name, f.img]),
  );
  return { cover, shots, extra };
}
