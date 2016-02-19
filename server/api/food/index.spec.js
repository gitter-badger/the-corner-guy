'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var foodCtrlStub = {
  index: 'foodCtrl.index',
  show: 'foodCtrl.show',
  create: 'foodCtrl.create',
  update: 'foodCtrl.update',
  destroy: 'foodCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var foodIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './food.controller': foodCtrlStub
});

describe('Food API Router:', function() {

  it('should return an express router instance', function() {
    expect(foodIndex).to.equal(routerStub);
  });

  describe('GET /api/foods', function() {

    it('should route to food.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'foodCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/foods/:id', function() {

    it('should route to food.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'foodCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/foods', function() {

    it('should route to food.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'foodCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/foods/:id', function() {

    it('should route to food.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'foodCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/foods/:id', function() {

    it('should route to food.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'foodCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/foods/:id', function() {

    it('should route to food.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'foodCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
