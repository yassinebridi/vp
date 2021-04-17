---
to: adapters/graphql/mutations/<%=h.inflection.pluralize(name)%>/create<%=Name%>.graphql
---
mutation create<%=Name%>($create<%=Name%>Input: <%=Name%>CreateInput!) {
  create<%=Name%>(create<%=Name%>Input: $create<%=Name%>Input)
}
