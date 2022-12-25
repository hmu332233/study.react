import { loadImage } from '../utils';

function SuspenseImage(props) {
  loadImage(props.src).read();
  return <img {...props} />;
}

export default SuspenseImage;