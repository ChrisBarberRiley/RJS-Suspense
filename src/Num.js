import React from "react";

const Num = ({ resource }) => {
    const n = resource.num.read();
    console.log(n);
    return <div>{n}</div>;
};

export default Num;
