class App extends React.Component {

    render() {
        const friendData = [
            { name: "Aku",
                socialLinks: "https://github.com/thejsgirl",
                hobby: "cricket"}, 
                
                { name: "Aku",
                socialLinks: "https://github.com/thejsgirl",
                hobby: "cricket"},

                { name: "Aku",
                socialLinks: "https://github.com/thejsgirl",
                hobby: "cricket"}
            ];
        return <div>
           <Friend friends ={ friendData}/>

        </div>
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
