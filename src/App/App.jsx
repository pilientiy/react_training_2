import './App.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
import Feedback from '../Feedback/Feedback';



export default function App () {
    return (
        <>
        <Description/>
        <Options updateFeedback={1}
        resetFeedback={2}
        totalFeedback={3}/>

        {totalFeedback === 0 ? (
        <Notification totalFeedback={3} />
      ) : (
        <Feedback
          countFeedback={4}
          totalFeedback={5}
          positiveFeedback={6}
        />
        )} 
        </>
    );
};