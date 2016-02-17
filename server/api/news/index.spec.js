'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var newsCtrlStub = {
  index: 'newsCtrl.index',
  show: 'newsCtrl.show',
  create: 'newsCtrl.create',
  update: 'newsCtrl.update',
  destroy: 'newsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var newsIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './news.controller': newsCtrlStub
});

describe('News API Router:', function() {

  it('should return an express router instance', function() {
    expect(newsIndex).to.equal(routerStub);
  });

  describe('GET /api/newss', function() {

    it('should route to news.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'newsCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/newss/:id', function() {

    it('should route to news.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'newsCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/newss', function() {

    it('should route to news.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'newsCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/newss/:id', function() {

    it('should route to news.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'newsCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/newss/:id', function() {

    it('should route to news.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'newsCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/newss/:id', function() {

    it('should route to news.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'newsCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
