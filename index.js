class App extends React.Component {

    render() {
        const friendData = [
            { name: "Aku",
                socialLinks: [
                    {
                        github: "https://github.com/thejsgirl",
                        linkedIn: "https://github.com/thejsgirl"
                    }
                ],
                hobby: ["cricket", "badminton", "tenis"]}, 
                
                { name: "anup",
                socialLinks: [
                    {
                        github: "https://github.com/thejsgirl",
                        linkedIn: "https://github.com/thejsgirl"
                    }
                ],
                hobby: ["cricket", "badminton", "tenis"]},
            ];
        return <div>
            <h1>Friends List</h1>
           <Friend name="Aku"    socialLinks = {[
                    {
                        github: "https://github.com/thejsgirl",
                        linkedIn: "https://github.com/thejsgirl"
                    }
                ] }hobby = {["cricket", "badminton", "tenis"]} />
            <Friend name="Akriti"    socialLinks = {[
                    {
                        github: "https://github.com/thejsgirl",
                        linkedIn: "https://github.com/thejsgirl"
                    }
                ] }hobby = {["cricket", "badminton", "tenis"]} />

        </div>
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
