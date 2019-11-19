import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  fetchMovieWithId,
  fetchMovieCast,
  fetchMovieReview,
} from '../../../../services/fetcher';
import styles from './MovieDetailsPage.module.css';
import Movie from '../Movie/Movie';
import Cast from './Cast/Cast';
import Review from './Reviews/Reviews';

class MovieDetailsPage extends Component {
  state = { movie: null, cast: [], review: [] };

  componentDidMount() {
    fetchMovieWithId(this.props.match.params.movieId)
      .then(alldata => alldata.data)
      .then(movie => this.setState({ movie }));

    fetchMovieCast(this.props.match.params.movieId)
      .then(alldata => alldata.data)
      .then(data => data.cast)
      .then(cast => this.setState({ cast }));

    fetchMovieReview(this.props.match.params.movieId)
      .then(alldata => alldata.data)
      .then(data => data.results)
      .then(review => this.setState({ review }));
  }

  handleGoback = () => {
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }

    history.push('/movies');
  };

  render() {
    const { movie, cast, review } = this.state;
    const { match } = this.props;
    const WrappedCast = function(props) {
      return <Cast {...props} cast={cast} />;
    };
    const WrappedReview = function(props) {
      return <Review {...props} review={review} />;
    };

    return (
      <div>
        <button
          type="button"
          className={styles.backButton}
          onClick={this.handleGoback}
        >
          Go back
        </button>
        {movie && <Movie {...movie} />}
        <h3 className={styles.addInfo}>Additional information </h3>
        <Link
          to={{
            pathname: `/movies/${match.params.movieId}/cast`,
            state: { from: this.props.location },
          }}
          className={styles.cast}
        >
          Cast
        </Link>
        <Route path="/movies/:movieId/cast" component={WrappedCast} />
        <Link
          to={{
            pathname: `/movies/${match.params.movieId}/review`,
            state: { from: this.props.location },
          }}
          className={styles.review}
        >
          Review
        </Link>
        <Route path="/movies/:movieId/review" component={WrappedReview} />
      </div>
    );
  }
}

MovieDetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(MovieDetailsPage);
