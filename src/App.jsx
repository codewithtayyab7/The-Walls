import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import RootLayout from './layouts/RootLayout'
import PageTransition from './components/motion/PageTransition'
import PageLoader from './components/ui/PageLoader'

import {
  Home,
  CharactersList,
  CharacterDetail,
  TitansList,
  TitanDetail,
  TimelinePage,
  WorldMapPage,
  QuizPage,
  CommunityPage,
  RumblingPage,
  NotFound,
} from './router/routes'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route element={<RootLayout />}>
          <Route
            index
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="characters"
            element={
              <PageTransition>
                <CharactersList />
              </PageTransition>
            }
          />
          <Route
            path="characters/:slug"
            element={
              <PageTransition>
                <CharacterDetail />
              </PageTransition>
            }
          />
          <Route
            path="titans"
            element={
              <PageTransition>
                <TitansList />
              </PageTransition>
            }
          />
          <Route
            path="titans/:slug"
            element={
              <PageTransition>
                <TitanDetail />
              </PageTransition>
            }
          />
          <Route
            path="timeline"
            element={
              <PageTransition>
                <TimelinePage />
              </PageTransition>
            }
          />
          <Route
            path="world-map"
            element={
              <PageTransition>
                <WorldMapPage />
              </PageTransition>
            }
          />
          <Route
            path="quiz"
            element={
              <PageTransition>
                <QuizPage />
              </PageTransition>
            }
          />
          <Route
            path="community"
            element={
              <PageTransition>
                <CommunityPage />
              </PageTransition>
            }
          />
          <Route
            path="rumbling"
            element={
              <PageTransition>
                <RumblingPage />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <AnimatedRoutes />
      </Suspense>
    </BrowserRouter>
  )
}
