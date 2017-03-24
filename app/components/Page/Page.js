import React from 'react';
import styles from './Page.scss';


class Page extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className={styles.Page}>
        <h1>Hello World</h1>
      </div>
      )
  }
}

export default Page;
// const mapStateToProps = ( state, ownProps) => {
//   return {
//     data: state.cardReducer.toJS()
//   }
// }

// export default connect(
//   mapStateToProps
//   )(Page);