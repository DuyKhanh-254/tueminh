/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Layout from './components/Layout';
import IntroductionScreen from './screens/IntroductionScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import SummaryScreen from './screens/SummaryScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <Layout currentScreen={currentScreen} onNavigate={setCurrentScreen}>
      {currentScreen === 'home' && <IntroductionScreen onNavigate={setCurrentScreen} />}
      {currentScreen === 'projects' && <ProjectsScreen />}
      {currentScreen === 'summary' && <SummaryScreen />}
    </Layout>
  );
}
