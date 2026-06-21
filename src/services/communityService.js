import { POSTS, POLL_DATA, RANKINGS } from '../data/community'

// Swap point for backend integration — see characterService.js for the pattern.
// In production: POSTS would be GET /api/posts (paginated), POLL_DATA would be
// GET /api/polls/active, and a vote would be POST /api/polls/:id/vote.

export const getPosts = async () => Promise.resolve(POSTS)
export const getPollData = async () => Promise.resolve(POLL_DATA)
export const getRankings = async () => Promise.resolve(RANKINGS)
