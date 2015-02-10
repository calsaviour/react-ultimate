// IMPORTS =========================================================================================
let React = require("react");
let Router = require("react-router");
let {Link, RouteHandler} = Router;
let DocumentTitle = require("react-document-title");
let Actions = require("../actions");
let Reflux = require("reflux");
let Store = require("../store");

// EXPORTS =========================================================================================
let Detail = React.createClass({
  mixins: [Router.State, Router.Navigation],

  componentDidMount() {
    console.debug("RobotsDetail.componentDidMount");
  },

  componentWillUnmount() {
    console.debug("RobotsDetail.componentWillUnmount");
  },

  onRemove() {
    console.debug("RobotsDetail.onRemove");
  },

  render() {
    console.debug("RobotsDetail.render", this.getParams());
    let model = Store.getModel(this.getParams().id);
    console.debug("model:", model);
    if (model) {
      return (
        <DocumentTitle title={"Robot " + model.name + " (#" + model.id + ")"}>
          <div>
            <div id="page-actions">
              <div className="container">
                <div className="pull-left">
                  <Link to="robot-index" className="btn btn-sm btn-gray-lighter" title="Back to list">
                    <span className="fa fa-arrow-left"></span>
                    <span className="hidden-xs margin-left-sm">Back to list</span>
                  </Link>
                </div>
                <div className="btn-group btn-group-sm pull-right">
                  <Link to="robot-edit" params={{id: model.id}}  className="btn btn-blue" title="Edit">
                    <span className="fa fa-edit"></span>
                  </Link>
                  <a className="btn btn-red" title="Delete" onClick={this.onRemove}><span className="fa fa-times"></span></a>
                </div>
              </div>
            </div>
            <section className="container">
              <div className="thumbnail pull-left margin-top nopadding">
                <img src={"http://robohash.org/" + model.id + "?size=200x200"} width="200px" height="200px"/>
              </div>
              <h1>{model.name}</h1>
              <dl>
                <dt>Serial Number</dt><dd>{model.serialNumber}</dd>
                <dt>Assembly Date</dt><dd>{model.assemblyDate}</dd>
                <dt>Manufacturer</dt><dd>{model.manufacturer}</dd>
              </dl>
            </section>
          </div>
        </DocumentTitle>
      );
    } else {
      return (
        <DocumentTitle title="Robot loading...">
          <div>
            <section className="container">
              ...
            </section>
          </div>
        </DocumentTitle>
      );
    }
  },
});

export default Detail;