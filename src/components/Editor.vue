<template>
  <div class="">
    <quill-editor
      class="editor"
      v-model="content"
      :options="editorConfig['options']"
      @ready="onEditorReady($event)"
      ref="editor"
    >
      <div :id="'toolbar' + toolbarId" class="" slot="toolbar">
        <div
          class="toolbar-inner w-full h-full relative"
          :y-position="toolbarPosition"
        >
          <div
            class="toolbar-inner__top px-2 w-full h-10 flex justify-between items-center"
          ></div>

          <div
            class="toolbar-inner__middle px-2 w-full h-10 flex justify-between items-center"
          >
            <div class="left-panel">
              <button type="button" class="ql-bold">Bold</button>
              <button type="button" class="ql-italic"></button>
              <button type="button" class="ql-list" value="ordered"></button>
              <button type="button" class="ql-list" value="bullet"></button>
            </div>
            <div class="">
              <button type="button" class="ql-image"></button>
              <button
                type="button"
                class=""
                @click="toggleToolbarPosition('top')"
              >
                <svg
                  class="fill-current w-3 h-3 text-kora-light1"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.30576 2.21974C9.46719 2.0526 9.66029 1.91928 9.8738 1.82756C10.0873 1.73585 10.3169 1.68757 10.5493 1.68555C10.7817 1.68353 11.0121 1.72781 11.2272 1.8158C11.4422 1.9038 11.6376 2.03374 11.8019 2.19805C11.9663 2.36236 12.0962 2.55775 12.1842 2.77282C12.2722 2.98789 12.3165 3.21833 12.3144 3.45069C12.3124 3.68306 12.2642 3.91269 12.1724 4.1262C12.0807 4.33971 11.9474 4.53281 11.7803 4.69424L9.15526 7.31924C8.82708 7.64732 8.38205 7.83162 7.91801 7.83162C7.45397 7.83162 7.00893 7.64732 6.68076 7.31924C6.51573 7.15985 6.2947 7.07166 6.06528 7.07365C5.83586 7.07564 5.6164 7.16767 5.45417 7.3299C5.29193 7.49213 5.19991 7.71159 5.19792 7.94102C5.19593 8.17044 5.28412 8.39147 5.44351 8.55649C6.09986 9.21264 6.98993 9.58124 7.91801 9.58124C8.84608 9.58124 9.73616 9.21264 10.3925 8.55649L13.0175 5.93149C13.6551 5.27138 14.0078 4.38728 13.9999 3.46959C13.9919 2.5519 13.6238 1.67405 12.9749 1.02513C12.3259 0.376198 11.4481 0.00810678 10.5304 0.000132309C9.61272 -0.00784216 8.72862 0.344938 8.06851 0.982491L6.75601 2.29499C6.67244 2.37571 6.60578 2.47226 6.55992 2.57901C6.51406 2.68577 6.48992 2.80058 6.48891 2.91677C6.48791 3.03295 6.51004 3.14817 6.55404 3.2557C6.59804 3.36324 6.66301 3.46093 6.74516 3.54309C6.82732 3.62524 6.92501 3.69021 7.03255 3.73421C7.14008 3.77821 7.2553 3.80035 7.37148 3.79934C7.48767 3.79833 7.60248 3.77419 7.70924 3.72833C7.81599 3.68247 7.91254 3.61581 7.99326 3.53224L9.30576 2.21974ZM4.93076 6.59474C5.25893 6.26667 5.70397 6.08237 6.16801 6.08237C6.63205 6.08237 7.07708 6.26667 7.40526 6.59474C7.48597 6.67831 7.58253 6.74497 7.68928 6.79083C7.79603 6.83669 7.91085 6.86083 8.02703 6.86184C8.14321 6.86285 8.25843 6.84071 8.36597 6.79671C8.4735 6.75272 8.5712 6.68774 8.65335 6.60559C8.73551 6.52343 8.80048 6.42574 8.84448 6.3182C8.88847 6.21067 8.91061 6.09545 8.9096 5.97927C8.90859 5.86308 8.88445 5.74827 8.8386 5.64151C8.79274 5.53476 8.72608 5.43821 8.64251 5.35749C7.98616 4.70134 7.09608 4.33274 6.16801 4.33274C5.23993 4.33274 4.34986 4.70134 3.69351 5.35749L1.06851 7.98249C0.734223 8.30536 0.467585 8.69156 0.284154 9.11858C0.100722 9.54559 0.00417051 10.0049 0.000132149 10.4696C-0.00390621 10.9343 0.0846497 11.3952 0.260633 11.8253C0.436616 12.2555 0.696502 12.6463 1.02513 12.9749C1.35375 13.3035 1.74453 13.5634 2.17467 13.7394C2.60481 13.9154 3.06569 14.0039 3.53041 13.9999C3.99514 13.9958 4.45441 13.8993 4.88142 13.7158C5.30844 13.5324 5.69464 13.2658 6.01751 12.9315L7.33001 11.619C7.41358 11.5383 7.48024 11.4417 7.5261 11.335C7.57195 11.2282 7.59609 11.1134 7.5971 10.9972C7.59811 10.881 7.57597 10.7658 7.53198 10.6583C7.48798 10.5507 7.42301 10.4531 7.34085 10.3709C7.2587 10.2887 7.161 10.2238 7.05347 10.1798C6.94593 10.1358 6.83071 10.1136 6.71453 10.1146C6.59835 10.1157 6.48353 10.1398 6.37678 10.1857C6.27003 10.2315 6.17347 10.2982 6.09276 10.3817L4.78026 11.6942C4.61883 11.8614 4.42572 11.9947 4.21222 12.0864C3.99871 12.1781 3.76907 12.2264 3.53671 12.2284C3.30435 12.2304 3.07391 12.1862 2.85884 12.0982C2.64377 12.0102 2.44838 11.8802 2.28407 11.7159C2.11976 11.5516 1.98981 11.3562 1.90182 11.1412C1.81383 10.9261 1.76955 10.6957 1.77157 10.4633C1.77359 10.2309 1.82187 10.0013 1.91358 9.78778C2.0053 9.57428 2.13862 9.38117 2.30576 9.21974L4.93076 6.59474Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            class="toolbar-inner__bottom px-2 w-full h-10 flex justify-between items-center"
          >
            <div class="left-panel">
              <button type="button" class="" @click="toggleMentionsMenu">
                <svg
                  class="fill-current text-kora-light1"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                >
                  <path
                    d="M15 6.77419C15 2.65376 11.675 0 7.5 0C3.35504 0 0 3.35441 0 7.5C0 11.6449 3.35441 15 7.5 15C9.10058 15 10.6658 14.4835 11.9485 13.5387C12.1148 13.4161 12.1427 13.1781 12.0118 13.0182L11.5514 12.4558C11.4288 12.306 11.2112 12.2803 11.0546 12.3941C10.0266 13.1406 8.77736 13.5484 7.5 13.5484C4.16492 13.5484 1.45161 10.8351 1.45161 7.5C1.45161 4.16492 4.16492 1.45161 7.5 1.45161C10.8106 1.45161 13.5484 3.41794 13.5484 6.77419C13.5484 8.68264 12.2638 9.74667 11.0377 9.74667C10.4478 9.74667 10.4288 9.36502 10.5428 8.79517L11.4083 4.30252C11.4514 4.07867 11.2799 3.87097 11.052 3.87097H9.86725C9.7829 3.871 9.70119 3.9004 9.63615 3.95413C9.57112 4.00785 9.52683 4.08254 9.51088 4.16537C9.47755 4.33845 9.46065 4.41747 9.44193 4.58855C9.08135 3.99738 8.3569 3.64899 7.47009 3.64899C5.3048 3.64899 3.3871 5.53878 3.3871 8.27208C3.3871 10.1216 4.38136 11.3601 6.20504 11.3601C7.10634 11.3601 8.0602 10.851 8.6168 10.0827C8.74216 11.0155 9.47861 11.2322 10.4123 11.2322C13.4113 11.2322 15 9.30804 15 6.77419ZM6.71673 9.71825C5.85569 9.71825 5.34163 9.1298 5.34163 8.14415C5.34163 6.40482 6.538 5.31925 7.59798 5.31925C8.50887 5.31925 8.97311 5.97042 8.97311 6.87913C8.97311 8.29639 7.96978 9.71825 6.71673 9.71825Z"
                  />
                </svg>
              </button>
              <button type="button" class="ql-blockquote"></button>
              <button type="button" class="ql-code-block"></button>
              <button type="button" class="">
                <svg
                  class="fill-current ml-1 text-kora-light1"
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                >
                  <path
                    d="M8.99875 12H1.32376C1.06492 12.0002 0.811709 11.9245 0.595509 11.7822C0.379309 11.6398 0.209632 11.4372 0.107514 11.1994C-0.101861 10.7125 1.42157e-05 10.15 0.365639 9.76624L3.9572 5.99999L0.365639 2.23375C1.42157e-05 1.85 -0.101861 1.2875 0.107514 0.800624C0.209669 0.562809 0.379355 0.360192 0.595547 0.217878C0.811739 0.0755651 1.06493 -0.000189636 1.32376 3.565e-07H8.99875C9.55156 3.565e-07 10 0.447812 10 0.999999V2.5C10 2.77625 9.77594 3 9.49938 3H8.99875C8.72219 3 8.49813 2.77625 8.49813 2.5V1.5H1.73939L5.37282 5.31062C5.74126 5.69687 5.74126 6.30374 5.37282 6.68999L1.73939 10.5H8.49813V9.49999C8.49813 9.22374 8.72219 8.99999 8.99875 8.99999H9.49938C9.77594 8.99999 10 9.22374 10 9.49999V11C10 11.5522 9.55156 12 8.99875 12Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </quill-editor>
  </div>
</template>

<script>
import "quill-mention";
import { styles } from "../constants/styles";
import { suggestions } from "../constants/mentions";

export default {
  name: "Editor",
  props: {
    toolbarId: String,
  },
  data: function () {
    return {
      content: "",
      toolbarPosition: "middle",
      linkInput: "",
    };
  },
  computed: {
    editorConfig: function () {
      return {
        options: {
          placeholder: "Write your answer...",
          modules: {
            toolbar: `#toolbar${this.toolbarId}`,
            history: {
              delay: 2000,
              maxStack: 500,
              userOnly: true,
            },
            mention: {
              allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
              mentionDenotationChars: ["@"],
              source: this.handleEditorMention,
              showDenotationChar: false,
            },
          },
        },
      };
    },
    getQuill: function () {
      return this.$refs["editor"].quill;
    },
  },
  methods: {
    overrideEditorStyles: function () {
      const editor = this.$refs["editor"];
      console.log(editor.$el);
      editor.$el.querySelector(".ql-link").innerText = "Add";
    },
    injectCSSStyles: function () {
      const style_global = document.createElement("style");

      style_global.innerHTML = styles;
      document.head.appendChild(style_global);
    },
    toggleToolbarPosition: function (position) {
      const validPositions = ["top", "middle", "bottom"];

      if (!validPositions.includes(position)) return;

      this.toolbarPosition = position;
    },
    handleImageUpload: function () {
      const fileInput = document.createElement("input");
      fileInput.setAttribute("type", "file");
      fileInput.click();

      fileInput.onchange = () => {
        // Listen for image upload
        const file = fileInput.files[0];

        if (/^image\//.test(file.type)) {
          // handle server request
          console.log("saved to server");
        } else {
          console.warn("[WARNING]: You can only upload images");
        }
      };
    },
    handleEditorMention: function (searchTerm, renderList, mentionChar) {
      let values;

      if (mentionChar === "@") {
        values = suggestions;
      }

      if (searchTerm.length === 0) {
        renderList(values, searchTerm);
      } else {
        const matches = [];
        for (let i = 0; i < values.length; i++)
          if (~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase()))
            matches.push(values[i]);
        renderList(matches, searchTerm);
      }
    },
    toggleMentionsMenu: function () {
      console.log(this.getQuill.getModule("mention"));
      this.getQuill.getModule("mention").openMenu("@");
    },
    handleTextLink: function (value) {
      const href = this.linkInput;
      if (!value || href == "") {
        this.getQuill.format("link", false);
        return;
      }

      this.getQuill.format("link", href);
    },
    handleUndoChange: function () {
      this.getQuill.history.undo();
    },
    handleRedoChange: function () {
      this.getQuill.history.redo();
    },
    onEditorReady: function (quill) {
      quill.getModule("toolbar").addHandler("image", () => {
        this.handleImageUpload();
      });
      quill.getModule("toolbar").addHandler("link", this.handleTextLink);
    },
  },
  mounted: function () {
    this.overrideEditorStyles();
    this.injectCSSStyles();
  },
};
</script>
