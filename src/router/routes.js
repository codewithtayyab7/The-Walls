import { lazy } from 'react'

// Lazy-loaded pages — each becomes its own chunk, keeping the initial
// bundle small. React Router + Suspense (wired in App.jsx) handles the
// loading boundary.
export const Home = lazy(() => import('../pages/Home'))
export const CharactersList = lazy(() => import('../pages/CharactersList'))
export const CharacterDetail = lazy(() => import('../pages/CharacterDetail'))
export const TitansList = lazy(() => import('../pages/TitansList'))
export const TitanDetail = lazy(() => import('../pages/TitanDetail'))
export const TimelinePage = lazy(() => import('../pages/TimelinePage'))
export const WorldMapPage = lazy(() => import('../pages/WorldMapPage'))
export const QuizPage = lazy(() => import('../pages/QuizPage'))
export const CommunityPage = lazy(() => import('../pages/CommunityPage'))
export const RumblingPage = lazy(() => import('../pages/RumblingPage'))
export const NotFound = lazy(() => import('../pages/NotFound'))
