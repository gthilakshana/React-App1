import './App.css';

const users=[

    {
        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65S0I5iyhOT4-0q4OpSgIjxRfyNRUa2L044K9yXF9bm5SRmO5pgudmnXfCQNnb_J_KcE&usqp=CAU',
        name:'Will Smith',
        designation:'Actors',
        salary:1500000,
        code:1
    },
    {
        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAaIbfYhhZERZaXDGfc5W0FuAob5IbHbf4LFTFLh5dilQW0FXX',
        name:'Tom Cruise (Tom Cruise)',
        designation:'Actors',
        salary:2500000,
        code:2
    },
    {
        avatar:'https://upload.wikimedia.org/wikipedia/commons/b/bc/Leonardo_DiCaprio_January_2014.jpg',
        name:'Leonardo DiCaprio',
        designation:'Actors',
        salary:2300000,
        code:3
    },
    {
        avatar:'https://upload.wikimedia.org/wikipedia/commons/6/64/Johnny_Depp_2%2C_2011.jpg',
        name:'Johnny Depp',
        designation:'Actors',
        salary:23000000,
        code:4
    }
]


function UserManager(){
    return(
        <div className='wrapper'>
            <SearchForm/>
            {users.map((user)=>{
                return <User{...user} key={user.code}/>;
                })}


        </div>
    );
}

const SearchForm=()=>{


         return(
             <div className='search-outer'>
                 <form className='form' onSubmit={(e)=>{
                         e.preventDefault();
                         console.log('manageSubmitEvent');
                     }
                 }>
                     <input type="search" name='searchText' onChange={(e)=>{
                         console.log(e.target.value);
                      }
                     }/> |
                     <button type='submit' onClick={
                         (e)=>{
                             console.log('manageClickEvent');
                         }
                     }>Search Now</button>
                 </form>
             </div>
         );
}

const User = (props)=>{
    const {avatar,name,designation,salary}=props;

    return(
        <div className='user-outer'>
            <Avatar avatar={avatar}/>
            <UserData name={name}
                      designation={designation}
                      salary={salary}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </UserData>
        </div>
    )
}
const Avatar= ({avatar}) =>{
   return(
       <div className='avatar-outer'>
           <img src={avatar}
                alt="Felicity Huffman"/>
       </div>

   )
}
const UserData=( {name,designation,salary,children} )=>{

    return(
        <div className='user-data'>
            <UserName name={name}/>
            <Designation designation={designation}/>
            <Salary salary={salary}/>
            <p>
                {children}
            </p>

            <button style={{cursor:'pointer'}} onClick={(e) => {
                console.log(name);
            }}>
                Print data
            </button>
        </div>
    )
}

const UserName= ({name}) =>{
    const inlineStyle= {
        color:'#546de5',
        margin:0

        }
    return(
        <h2 style={inlineStyle}>{name}</h2>
    )
}

const Designation= ({designation}) =>{
    return(
        <h2 style={{fontStyle:"normal",margin:0}}>{designation}</h2>
    )
}

const Salary= ({salary}) =>{

    return(
        <h3 style={{fontStyle:"italic",margin:0}}>{salary}</h3>
    )
}


export default UserManager;
