mutation create<%=singular(classify(name))%>($create<%=singular(classify(name))%>Input: <%=singular(classify(name))%>CreateInput!) {
  create<%=singular(classify(name))%>(create<%=singular(classify(name))%>Input: $create<%=singular(classify(name))%>Input)
}
