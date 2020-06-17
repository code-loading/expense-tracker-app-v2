export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
        return {
            ...state,
            transactions: state.transactions.filter(transaction => 
                transaction.id !== action.payload)//I had an error here of writing action.id instead of .payload
        }

        case 'ADD_TRANSACTION':
            return {
                ...state,
                //payload contains our entire transaction, and we add it to the rest of the transaction with
                //...state.transactions
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
        
    }
}