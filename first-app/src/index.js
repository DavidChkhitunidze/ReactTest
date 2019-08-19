// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';
// import CommentDetail from './components/CommentDetail';
// import ApprovalCard from './components/ApprovalCard';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
import useLocation from './components/useLocation';

const App = () => {
    const [lat, errorMessage] = useLocation();

    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>;
    } else if (lat) {
        content = <SeasonDisplay lat={lat} />;
    } else {
        content = <Spinner message="Please accept location request..." />;
    }

    return (
        <div className="border red">
            {content}
        </div>

    );
};

// const Comments = () => {
//     return (
//         <div className="ui container comments">
//             <ApprovalCard>
//                 <CommentDetail
//                     author="Sam"
//                     timeAgo="Today at 6:00PM"
//                     text="Nice blog!"
//                     avatar={faker.image.avatar()}
//                 />
//             </ApprovalCard>
//             <ApprovalCard>
//                 <CommentDetail
//                     author="Alex"
//                     timeAgo="Today at 12:00PM"
//                     text="Always interested in!"
//                     avatar={faker.image.avatar()}
//                 />
//             </ApprovalCard>
//             <ApprovalCard>
//                 <CommentDetail
//                     author="Jane"
//                     timeAgo="Yesterday at 8:00PM"
//                     text="Everythig simple is perfect!"
//                     avatar={faker.image.avatar()}
//                 />
//             </ApprovalCard>
//         </div>
//     );
// }

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    // <Comments />,
    document.querySelector('#root')
);