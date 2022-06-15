import React, {useState} from 'react'
import Book from './Book.js'



const BookInfoModal = (props) => {

    const [book, setBook] = useState({...props.book})

    return (
        <>
            <div className="modal-wrapper">
                <div className="modal-content-container">
                    <div className="modal-body">
                        <div className="modal-header">
                            <h2>modal header</h2>
                        </div>
                        <div className="modal-content">
                            <Book book={book} origin={'bookinfo'} />
                        </div>
                        <div className="modal-footer">
                            <button onClick={props.closeBookInfoModal()}>
                                close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookInfoModal
