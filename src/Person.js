import React from "react";

const Person = ({ resource }) => {
    const person = resource.person.read();
    return (
        <div>
            Name: {person.name.first}
            and something else
        </div>
    );
};

export default Person;
