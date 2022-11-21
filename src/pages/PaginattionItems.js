import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Transaction from '../components/Transaction';

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map(item => (
                    <Transaction
                        transactionType={item.type}
                        amount={item.amount}
                        accountNo={item.accountNo}
                        accountName={item.accountName}
                        date={item.date}
                        message={item.message}
                    />
                ))
            }
        </>
    )
}

export default function PaginationItems({ transactions }) {
    const itemsPerPage = 5;
    const [startIndex, setStartIndex] = useState(0)
    const endIndex = startIndex + itemsPerPage
    const pageCount = Math.ceil(transactions.length / itemsPerPage);

    const currentItems = transactions.slice(startIndex, endIndex)
    console.log("currentItems: ");
    console.log(currentItems);
    const handlePageClick = (e) => {
        const newStartIndex = (e.selected * itemsPerPage) % transactions.length;
        setStartIndex(newStartIndex)
    }

    return (
        <>
            <Items
                currentItems={currentItems}
            />
            <ReactPaginate
                activeClassName={'item-active '}
                className="pagination-btn"
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    )
}