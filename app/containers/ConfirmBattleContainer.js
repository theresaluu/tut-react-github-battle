var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentWillMount: function () {
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this))
  },
  componentWillReceiveProps: function () {
  },
  componentWillUnmount: function () {
  },
  render: function() {
    return (
        <ConfirmBattle
          isLoading={this.state.isLoading}
          playersInfo={this.state.playersInfo} />
        );
  }
});

module.exports = ConfirmBattleContainer;
