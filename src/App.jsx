import TabButton from "./components/TabButton.jsx";

import Header from "./components/Header/Header.jsx";

import CoreConcepts from "./components/CoreConcepts.jsx";

import { CORE_CONCEPTS } from "./data.js";

import { useState } from "react";

import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(component) {
    setSelectedTopic(component);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected= {selectedTopic === 'components'} onSelect={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton isSelected= {selectedTopic === 'jsx'} onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton isSelected= {selectedTopic === 'props'} onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton isSelected= {selectedTopic === 'state'} onSelect={() => handleClick("state")}>State</TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a button for information</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
