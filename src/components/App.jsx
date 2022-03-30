import React from "react";
import Card from "./Card";
import content from "../content";

function CreateCard(content) {
    return (
        <Card
            key={content.id}
            image={content.logo}
            title={content.title}
            text={content.text}
        />
    );
}

function App() {
    return (
        <main>{content.map(CreateCard)}</main>
    );
}

export default App;