class Friend extends React.Component{

    render() {
       const {name, hobby, socialLinks} = this.props;
       console.log(this.props.name)
      return (  
      <div>
          <h2>{name}</h2>
          <p><h3>Hobbies</h3>
          {hobby.map((h, i) =><p>{h}</p>)}
          </p>
          <p>
              <h3>Social Links</h3>
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