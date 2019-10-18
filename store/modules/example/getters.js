export default {
    //getExample: state => state.example

    // Getter for lists filtration
    // You need to add a new “search” module and a “query” state to compare with the main state
    // Bind v-model="query" with data(){return {query: ''}}
    // watch: {  // Watching changes
    //     query(value) {
    //         this.setQuery(value);  // Pass the value 'query' to the action
    //     }
    // }

    // getExample(state, _, store) {
    //     const query = store.Search.query.toLowerCase();
    //     if(!!query) {
    //         return state.example.filter(item => {
    //             return item.title.toLowerCase().indexOf(query) !== -1;
    //         });
    //     } else {
    //         return state.example;
    //     }
    // }
}
