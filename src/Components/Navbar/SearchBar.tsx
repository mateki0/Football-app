import React,{useState} from 'react'
import styled from 'styled-components';
import {ChevronDown} from '@styled-icons/boxicons-solid'

const StyledSearch = styled.div`
    margin: auto;
    position:absolute;
    top:0;
    left:${({open}) =>
    (open === true && '-300px') ||
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
    (open === false && '4')
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
    (open === true && '325px') ||
    (open === false && '0')
};
    right:0;
    bottom:0;

    border-radius: 30px;
    padding: 0 10px;
    height:40px;
    background:#003bb8;
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
    text-shadow: 0 0 10px #003bb8;
    box-shadow: 0 0 25px 0 #003bb8,
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
`
const StyledInput = styled.input`
    position:absolute;
    width: ${({open}) =>
    (open === true && '350px') ||
    (open === false && '50px')
};
    opacity:${({open}) =>
    (open === true && '1') ||
    (open === false && '0')
};
    height:50px;
    
    margin:auto;
    top:0;
    left:0;
    bottom:0;
    right:0;
    outline:none;
    background:#003bb8;
    color: white;
    border:none;
    text-shadow: 0 0 10px #003bb8;
    box-shadow: 0 0 25px 0 #003bb8,
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
    padding: 0 20px 0 80px;
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
const StyledDiv = styled.div`
    display:flex;
    justify-content:center;
    margin:0 320px;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:300px;
    height:100px;
`
const NavSearch = styled.div`

`
const StyledUl = styled.ul`
    position:absolute;
    margin:0;
    min-width:100px;
    top:45px;
    left:0;
    right:0;
    bottom:0;
    list-style-type:none;
    padding:0;
    display:${({dropdownOpen}) =>
    (dropdownOpen === true && 'flex') ||
    (dropdownOpen === false && 'none')
};
    flex-direction:column;
    justift-content:center;
    border:none;
    background:#003bb8;
    text-shadow: 0 0 10px #003bb8;
    box-shadow: 0 0 25px 0 #003bb8,
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
    z-index:2;
    transition: all .5s;
`
const StyledOption = styled.li`
font-size:14px;
    width:100%;
    padding: 5px 8px;
    margin-top:2px;
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
    position:absolute;
    min-width:100px;
    margin:auto;
    top:5px;
    left:${({open}) =>
    (open === true && '0') ||
    (open === false && '')
    }
    right:0;
    bottom:0;
    padding: 5px 10px;
    cursor:pointer;
    letter-spacing:0.1em;
    color:#fff;
    
`
const DropIcon = styled(ChevronDown)`
margin-left:15px;
`
const SearchBar =() => {
    const [open, setOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [filter, setFilter] = useState<string>('Players');
    console.log(filter)
    return(
        <NavSearch>
            <StyledDiv >
                <StyledInput open={open} onClick={(()=>setOpen(true))} placeholder={`Search by ${filter}`}/>
                <StyledFilter open={open} >
                <DropOpen open={open} onClick={()=>setDropdownOpen(dropdownOpen === true ? false : true)}>{filter}<DropIcon size="18" /></DropOpen>
                    <StyledUl dropdownOpen={dropdownOpen}>
                        <StyledOption onClick={(e: { currentTarget: { innerText: React.SetStateAction<string>; }; })=>setFilter(e.currentTarget.innerText)} >Players</StyledOption>
                        <StyledOption onClick={(e: { currentTarget: { innerText: React.SetStateAction<string>; }; })=>setFilter(e.currentTarget.innerText)} >Teams</StyledOption>
                        <StyledOption onClick={(e: { currentTarget: { innerText: React.SetStateAction<string>; }; })=>setFilter(e.currentTarget.innerText)} >Competitions</StyledOption>
                    </StyledUl>
                </StyledFilter>
                <StyledSearch open={open} onClick={()=>setOpen(false)} />
            </StyledDiv>
        </NavSearch>
    )
}
export default SearchBar;