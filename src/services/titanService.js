import { TITANS } from '../data/titans'

// Swap point for backend integration — see characterService.js for the pattern.

export const getTitans = async () => Promise.resolve(TITANS)

export const getTitanBySlug = async (slug) => Promise.resolve(TITANS.find((t) => t.slug === slug))
