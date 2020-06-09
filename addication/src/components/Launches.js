import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const ADDICATION_QUERY = gql`
query AddicationQuery {
    tasks{
        title
        description
        drugs
        difficulty
        level
    }
}
`;

export class Launches extends Component{
    render() {
        return(
            <div>
                <Query query ={ADDICATION_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if(loading) return <h4>loading</h4>
                            if(error) console.log(error);
                            console.log(data);
                            return <h4>test</h4>
                        }
                    }
                </Query>
            </div>
        )
    }
}

export default Launches;