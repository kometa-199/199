import React from 'react';
import Header from './components/Header';
import SectionCard from './components/SectionCard';
import Footer from './components/Footer';

function App() {
  const sections = [
    { title: 'Exam Prep', description: 'Study resources & tips', link: '#' },
    { title: 'Community Board', description: 'Discuss & share posts', link: '#' },
    { title: 'Articles', description: 'Read and share articles', link: '#' },
  ];

  return (
    <div>
      <Header />
      <div className="sections">
        {sections.map((sec, idx) => (
          <SectionCard key={idx} title={sec.title} description={sec.description} link={sec.link} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
