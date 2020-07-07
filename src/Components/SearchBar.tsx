import React,{useState,useRef} from 'react'
import styled from 'styled-components';


const StyledDiv = styled.div`
    position:absolute;
    width:300px;
    height:100px;
    margin:0 auto;  
`
const NavSearch = styled.div`
    display:flex;
    justify-content:center;
`

const StyledSearch = styled.div`
    margin: auto;
    position:absolute;
    top:0;
    left:${({open}) =>
    (open === true && '-450px') ||
    (open === false && '0')
};
    right:0;
    bottom:0;
    width:80px;
    height:80px;
    background:${({open}) =>
    (open === true && '#151515') ||
    (open === false && '#003bb8')
};
    border-radius:50%;
    z-index:${({open}) =>
    (open === true && '6') ||
    (open === false && '5')
};
    box-shadow: 0 0 25px 0 #003bb8;
    transition: all 1s;
    &:hover{
        cursor:pointer
    }

    &::before {
        content:"";
        position:absolute;
        margin: auto;
        top:${({open}) =>
        (open === true && '0') ||
        (open === false && '22px')
    };
        right:0;
        bottom:0;
        left:${({open}) =>
        (open === true && '0') ||
        (open === false && '22px')
    };
        width:${({open}) =>
        (open === true && '25px') ||
        (open === false && '12px')
    };
        height:2px;
        background:#fff;
        transform:rotate(45deg);
        transition: all .5s;
    }
    &::after{
        content:"";
        position:absolute;
        margin:auto;
        top:${({open}) =>
        (open === true && '0') ||
        (open === false && '-5px')
    };
        right:0;
        bottom:0;
        left:${({open}) =>
        (open === true && '0') ||
        (open === false && '-5px')
    };;
        width:25px;
        height:${({open}) =>
        (open === true && '2px') ||
        (open === false && '25px')
    };
        border-radius:${({open}) =>
        (open === true && '0') ||
        (open === false && '50%')
    };;
        border:${({open}) =>
        (open === true && 'none') ||
        (open === false && '2px solid #fff')
    };
        transform:${({open}) =>
        (open === true && 'rotate(-45deg)') ||
        (open === false && 'rotate(45deg)')
    };
        background:${({open}) =>
        (open === true && '#fff') ||
        (open === false && 'inital')
    };
        transition: all .5s;
    }
    
`

const StyledInput = styled.input`
    position:absolute;
    width: ${({open}) =>
    (open === true && '450px') ||
    (open === false && '50px')
};
    opacity:${({open}) =>
    (open === true && '1') ||
    (open === false && '0')
};
    height:50px;
    margin:auto;
    top:0;
    left:-90px;
    bottom:0;
    right:0;
    outline:none;
    background:#003bb8;
    color: #fff;
    border:none;
    text-shadow: 0 0 10px #003bb8;
    box-shadow: 0 0 25px 0 #003bb8,
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
    padding:${({open}) =>
    (open === true && '0 20px 0 80px') ||
    (open === false && '0')
    };
    border-radius: 30px;
    z-index:5;
    transition:all 1s;
    letter-spacing:0.1em;
    font-weight:600;

    &:hover{
        cursor:${({open}) =>
        (open === true && 'text') ||
        (open === false && 'pointer')
    };
    }
    &::placeholder{
            color:white;
            opacity:0.5;
            font-weight:600; 
    }

`


const SearchBar =() => {
    const [open, setOpen] = useState(false);
    const queryText = useRef<HTMLInputElement>(null);
    

   
    const Search = (e: { keyCode: number; }):void =>{
        if(e.keyCode === 13 && queryText && queryText.current){
            if(queryText.current.value.length >=3){
                window.location.href = `/competitions/${queryText.current.value}`
            }
        }
    }
    
    return(
        <NavSearch onKeyDown={Search}>
            <StyledDiv >
                <StyledInput  ref={queryText} open={open} onClick={(()=>setOpen(true))} placeholder={`Search by Competitions`}/>
                <StyledSearch open={open} onClick={()=>setOpen(open === false ? true : false)} />
            </StyledDiv>
        </NavSearch>
    )
}
export default SearchBar;