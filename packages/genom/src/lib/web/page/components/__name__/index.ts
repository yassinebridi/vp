import <%=classify(name)%>Table from "./<%=classify(name)%>Table";
import <%=classify(name)%>BulkAction from "./<%=classify(name)%>BulkAction";
import Create<%=singular(classify(name))%> from "./Create<%=singular(classify(name))%>";
import Update<%=singular(classify(name))%> from "./Update<%=singular(classify(name))%>";

export { <%=classify(name)%>Table, <%=classify(name)%>BulkAction, Create<%=singular(classify(name))%>, Update<%=singular(classify(name))%> };

