---
to: adapters/graphql/mutations/<%=h.inflection.pluralize(name)%>/bulk<%=h.inflection.pluralize(Name)%>.graphql
---
mutation bulk<%=h.inflection.pluralize(Name)%>($number: Int!) {
  bulk<%=h.inflection.pluralize(Name)%>(number: $number)
}
