# Chrome DevTools MCP Reference

This reference documents the essential tools provided by the `chrome-devtools` MCP server and how to invoke them via `call_mcp_tool`.

---

## 1. Page Navigation (`navigate_page`)
Navigates to a specific URL or history step.

### Arguments:
- `url` (string, required for type="url"): The target URL.
- `type` (string, optional): `"url"` (default), `"back"`, `"forward"`, or `"reload"`.
- `timeout` (integer, optional): Maximum wait time in milliseconds (e.g. `10000`).

### Example Call:
```json
{
  "ServerName": "chrome-devtools",
  "ToolName": "navigate_page",
  "Arguments": {
    "url": "https://dark.design"
  },
  "toolAction": "Navigating to website",
  "toolSummary": "Open target URL"
}
```

---

## 2. Text Snapshot (`take_snapshot`)
Captures an accessibility-tree representation of the current page, returning element UIDs, labels, and text nodes.

### Arguments:
- `verbose` (boolean, optional): `true` to include all subtree details, `false` for compact overview.
- `filePath` (string, optional): Save snapshot to a file path.

### Example Call:
```json
{
  "ServerName": "chrome-devtools",
  "ToolName": "take_snapshot",
  "Arguments": {
    "verbose": false
  },
  "toolAction": "Taking DOM snapshot",
  "toolSummary": "Read page structure"
}
```

---

## 3. Script Evaluation (`evaluate_script`)
Runs arbitrary JavaScript inside the page's execution context. Returned values are automatically JSON-serialized.

### Arguments:
- `function` (string, required): JavaScript arrow function or expression, e.g. `() => document.title` or `() => ({ ... })`.
- `args` (array, optional): Optional element UIDs passed to the function.

### Example Call:
```json
{
  "ServerName": "chrome-devtools",
  "ToolName": "evaluate_script",
  "Arguments": {
    "function": "() => {\n  return Array.from(document.querySelectorAll('a')).map(a => ({ text: a.textContent.trim(), href: a.href })).filter(x => x.text.length > 0);\n}"
  },
  "toolAction": "Extracting links",
  "toolSummary": "Evaluate link extraction"
}
```

---

## 4. Visual Screenshot (`take_screenshot`)
Captures a viewport screenshot for layout and visual review.

### Example Call:
```json
{
  "ServerName": "chrome-devtools",
  "ToolName": "take_screenshot",
  "Arguments": {},
  "toolAction": "Taking screenshot",
  "toolSummary": "Capture page visual"
}
```

---

## 5. Interactions (`click`, `fill`, `hover`, `wait_for`)

### Click an Element:
```json
{
  "ServerName": "chrome-devtools",
  "ToolName": "click",
  "Arguments": {
    "uid": "element_uid_from_snapshot"
  }
}
```

### Fill an Input:
```json
{
  "ServerName": "chrome-devtools",
  "ToolName": "fill",
  "Arguments": {
    "uid": "input_uid",
    "value": "Search query"
  }
}
```
