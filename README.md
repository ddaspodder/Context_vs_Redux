# Context_vs_Redux

React updates all consumers of a context, whether or not it uses a particular slice of global state

But

With Redux a component gets updated only if it makes use of any slice of global state.

So Redux has a better performance compared to Context.
