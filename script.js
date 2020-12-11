  // module aliases
  var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

  // create an engine
  var engine = Engine.create();

  // create a renderer
  var render = Render.create({
    element: document.body,
    engine: engine,
  });

  // create two boxes and a ground
  var objects = [
    Bodies.rectangle(400, 200, 80, 80),
    Bodies.rectangle(450, 50, 80, 80),
  ];
  var static = [Bodies.rectangle(400, 610, 810, 60, { isStatic: true })];
  var stuff2r = [].concat(static, objects);
  // add all of the bodies to the world
  World.add(engine.world, stuff2r);

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
