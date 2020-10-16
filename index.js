function Mendchilgee(){//function component, props-uгүй
    return<h1>Hello World</h1>;
    }
    function Mendchilgee123(props){//function component, props-uгүй
        return<h1>{props.ner}</h1>;
            }
    function Mendchilgee456(props){//function component, props-uгүй
                return(
                    <div>
                        <h1>{props.ner}</h1>
                        <p>{props.nas}</p>
                    </div>
                )
           }
    function EtsegComp(props){
        return(
            <div>
                <Mendchilgee/>
                <Mendchilgee123 ner={props.ner}/>
                <Mendchilgee456 ner={props.ner} nas={props.nas}/>
                <table>
                    <tr><td> {props.angi[0]}</td></tr>
                    <tr><td> {props.angi[1]}</td></tr>
                    <tr><td> {props.angi[2]}</td></tr>
                </table>
            </div>
        )
    }
              ReactDOM.render(
                //  <Mendchilgee/>,
               // <Mendchilgee123 ner="bat"/>,
               // <Mendchilgee456 ner="bat" nas='55'/>,
               <EtsegComp ner="james" nas="22" angi={['ПХ','МС','НББМС']}/>,
                document.getElementById('root')
              );
