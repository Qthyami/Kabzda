import React, {useCallback, useMemo, useState} from "react";


export const LikeUseCallback=()=>{
    console.log("LikeUseCallback")
    const [counter,setCounter]=useState(0);
    const [books, setBooks]=useState(["react", "jsa", "css","html"])


    // const newArray = useMemo(()=>{
    //     const filteredArray = books.filter (u=>u.toLowerCase().indexOf("a")>-1)
    //     return filteredArray
    // }, [books]);



    const memoizedAddBook = useMemo(()=>{return ()=>{
        console.log(books)
        console.log("addBook rendered")
        const newBooks = [...books, "angular"+ new Date().getTime()]
        setBooks(newBooks)
    }}, [books]);

    const memoizedAddBook2=useCallback(()=>{
        console.log(books)
        console.log("addBook rendered")
        const newBooks = [...books, "angular"+ new Date().getTime()]
        setBooks(newBooks)

    },[books])

    return <>
        <button onClick = {()=>setCounter(counter+1)}>+</button>

        {counter}
        <Book  addBook={memoizedAddBook}/>
    </>
}
type BookSecretPropsType = {

addBook:()=>void
}
const BooksSecret=(props:BookSecretPropsType)=>{

    return <div>
        <button onClick={()=>props.addBook()}>add book</button>

    </div>
}
const Book=React.memo(BooksSecret)