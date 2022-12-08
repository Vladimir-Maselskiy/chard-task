import { progressIndicatorItems } from '../../data/progressIndicatorItems';
import { ProgressCheckImage } from '../ProgressCheckImage/ProgressCheckImage';

export const ProgressIndicator = ({ step }) => {
  console.log(
    'progressIndicatorItems',
    progressIndicatorItems
  );
  return (
    <ul>
      {progressIndicatorItems.map(
        (progressIndicatorItems, index) => {
          return (
            <li key={progressIndicatorItems}>
              <ProgressCheckImage
                progressChecked={index > step}
              ></ProgressCheckImage>
              <p>{progressIndicatorItems}</p>
            </li>
          );
        }
      )}
    </ul>
  );
};

// This gets called on every request
export function getServerSideProps() {
  const progressIndicatorItems = progressIndicatorItems;
  return { props: { step } };
}
