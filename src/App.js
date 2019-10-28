import React, { Suspense } from "react";
import { createResource } from "./FetchPerson";
import Person from "./Person";
import Num from "./Num";

const resource = createResource();
console.log(resource);

function App() {
    return (
        <div>
            <Suspense fallback={<h1>Loading</h1>}>
                <Person resource={resource} />
            </Suspense>
            <Suspense fallback={<h1>Loading</h1>}>
                <Num resource={resource} />
            </Suspense>
        </div>
    );
}

export default App;
