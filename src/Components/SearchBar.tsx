import React,{useState,useEffect,useRef} from 'react'
import styled from 'styled-components';
import {ChevronDown, ChevronUp} from '@styled-icons/boxicons-solid'

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
const StyledFilter = styled.div`
    margin: auto;
    position:absolute;
    top:0;
    left:${({open}) =>
    (open === true && '220px') ||
    (open === false && '0')
};
    right:0;
    bottom:0;
    border-radius: 30px;
    padding: 0 10px;
    height:40px;
    background:transparent;
    color: white;
    opacity:${({open}) =>
    (open === true && '1') ||
    (open === false && '0')
};
    z-index:${({open}) =>
    (open === true && '6') ||
    (open === false && '5')
};
    outline:none;
    cursor:pointer;
    transition:all 1s;
    letter-spacing:0.1em;
    font-weight:600;
    border:none;
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


const StyledDropdown = styled.div`
    position:absolute;
    text-align:center;
    margin:0;
    width:130px;
    top:45px;
    left:0;
    right:0;
    bottom:0;
    list-style-type:none;
    display:${({dropdownOpen}) =>
    (dropdownOpen === true && 'flex') ||
    (dropdownOpen === false && 'none')
};
    flex-direction:column;
    justift-content:center;
    border:none;
    background:transparent;
    
    z-index:2;
    transition: all .5s;
`
const StyledOption = styled.span`
    font-size:12px;
    padding: 8px 12px;
    margin:2px 0 0 15px;
    color: white;
    letter-spacing:0.1em;
    font-weight:600;
    outline:none;
    background:#003bb8;
    border-radius:30px;
    &:hover{
        cursor:pointer;
    }
`
const DropOpen = styled.span`
    display:flex;
    font-size:12px;
    margin-top:6px;
    padding: 5px 10px;
    cursor:pointer;
    letter-spacing:0.1em;
    color:#fff;
    width: ${({open}) =>
    (open === true && 'max-content') ||
    (open === false && '0px')
};
    transition:all 1s;
`
const DropOpenIcon = styled(ChevronDown)`
    margin-left:5px;
`
const DropCloseIcon = styled(ChevronUp)`
    margin-left:5px;
`
const SearchBar =() => {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [filter, setFilter] = useState<string>('Players');
    const dropdown = useRef<HTMLInputElement>(null);
    const queryText = useRef<HTMLInputElement>(null);
    const closeAfterFilter = (e:{currentTarget:HTMLInputElement}) =>{
        setFilter(e.currentTarget.innerText);
        setDropdownOpen(false);
    }

    const closeDropdown = (e) =>{
        if(dropdown && dropdown.current){
        if(dropdown.current.contains(e.target) ){
            return;
        } else{
        setDropdownOpen(false);
        }
    }
    }
    const Search = (e) =>{
        if(e.keyCode === 13 && queryText && queryText.current){
            if(queryText.current.value.length <3){
                console.log('Query must have atleast 3 letters')
            }
            if(filter === 'Competitions' && queryText.current.value.length >=3){
                window.location.href = `/competitions/${queryText.current.value}`
            }
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown);
        return () => {
            document.removeEventListener('mousedown', closeDropdown)
        }
    }, [])
    return(
        <NavSearch onKeyDown={Search}>
            <StyledDiv >
                <StyledInput  ref={queryText} open={open} onClick={(()=>setOpen(true))} placeholder={`Search by ${filter}`}/>
                <StyledFilter open={open} >
                    <div ref={dropdown}>
                    <DropOpen open={open} onClick={()=>setDropdownOpen(dropdownOpen === true ? false : true)}>{filter}{!dropdownOpen ? <DropOpenIcon size="18" /> : <DropCloseIcon size="18"/>}</DropOpen>
                    <StyledDropdown dropdownOpen={dropdownOpen} >
                        <StyledOption onClick={closeAfterFilter} >Players</StyledOption>
                        <StyledOption onClick={closeAfterFilter} >Teams</StyledOption>
                        <StyledOption onClick={closeAfterFilter} >Competitions</StyledOption>
                    </StyledDropdown>
                    </div>
                </StyledFilter>
                <StyledSearch open={open} onClick={()=>setOpen(open === false ? true : false)} />
            </StyledDiv>
        </NavSearch>
    )
}
export default SearchBar;