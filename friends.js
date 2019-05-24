class Friend extends React.Component{
    static defaultProps = {
        name: "Anonymous"
    }

    render() {
       const {name, hobby, socialLinks} = this.props;
      return (  
      <div className="Friend"> 
          <h2 className="name">{name}</h2>
          <p><h3 className="hobby">Hobbies</h3>
          {hobby.map((h, i) =><p>{h}</p>)}
          </p>
          <p>
              <h3 className="social">Social Links</h3>
              {socialLinks.map((s, i) =>{
                 return <div>
                       <p>Github: {s.github}</p>
                       <p>Linkedin: {s.linkedIn}</p>
                  </div>
              })}

          </p>

        </div>)
                                                                                                                                                                                                                                                                                                                                            
    }
} 