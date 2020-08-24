import React from "react";
import Header from "../components/ui/Header";

function App() {
    return (
        <div className="App">
            <Header />
            {[...new Array(120)]
                .map(
                    () => `Line 1
                            Line 2
                            Line 3`,
                )
                .join('\n')}
        </div>
    );
}

export default App;
