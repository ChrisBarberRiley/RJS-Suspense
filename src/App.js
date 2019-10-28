import React, { Suspense } from "react";
import { createResource } from "./FetchPerson";
import Person from "./Person";

const resource = createResource();
console.log(resource);

function App() {
    return (
        <div>
            <Suspense fallback={<h1>Loading</h1>}>
                <Person resource={resource} />
            </Suspense>
        </div>
    );
}

export default App;
