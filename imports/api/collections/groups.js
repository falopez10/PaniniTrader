import {Mongo} from "meteor/mongo";

export const Groups = new Mongo.Collection("groups");

if(Meteor.isServer){
    Meteor.publish("groups", function publishGroups(){
        return Groups.find();
    });
}