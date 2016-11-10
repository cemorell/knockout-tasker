 ///<refrence path="models.js" />

var appViewModel = function () {

  var self = this;
  self.members = ko.observableArray([]);
  self.tasks = ko.observableArray([]);

  self.isModifyMember = false;
  self.currentMember = ko.observable(new Member());

// Save a Member
  self.saveMember = function (){
    if(!self.isModifyMember) self.members.unshift(self.currentMember());
    self.currentMember(new Member());
    self.isModifyMember=false;
  }
// Modify a Member
  self.modifyMember = function(member){
    self.currentMember(member);
    self.isModifyMember = true;
  }

  self.isModifyTask = false;
  self.currentTask = ko.observable(new Task());

// Save a Task
  self.saveTask = function (){
    if(!self.isModifyTask) self.tasks.unshift(self.currentTask());
    self.currentTask(new Task());
    self.isModifyTask=false;
  }
  // Modify a Task
    self.modifyTask = function(task){
    self.currentTask(task);
    self.isModifyTask = true;
  }

}
ko.applyBindings(new appViewModel());
