import { parsePatchFile } from "../patch/parse"
const modeChangeAndModifyAndRename = `
diff --git a/numbers.txt b/banana.txt
old mode 100644
new mode 100755
similarity index 96%
rename from numbers.txt
rename to banana.txt
index fbf1785..92d2c5f
--- a/numbers.txt
+++ b/banana.txt
@@ -1,4 +1,4 @@
-one
+ne
 
 two
 
`

    expect(parsePatchFile(patch)).toMatchSnapshot()
    expect(() => parsePatchFile(invalidHeaders1)).toThrow()
    expect(() => parsePatchFile(invalidHeaders2)).toThrow()
    expect(() => parsePatchFile(invalidHeaders3)).toThrow()
    expect(() => parsePatchFile(invalidHeaders4)).toThrow()
    expect(() => parsePatchFile(invalidHeaders5)).toThrow()
    expect(parsePatchFile(accidentalBlankLine)).toEqual(parsePatchFile(patch))
    expect(parsePatchFile(crlfLineBreaks)).toMatchSnapshot()
  })

  it("works", () => {
    expect(parsePatchFile(modeChangeAndModifyAndRename)).toMatchSnapshot()

    expect(parsePatchFile(accidentalBlankLine)).toMatchSnapshot()
    expect(parsePatchFile(modeChangeAndModifyAndRename)).toMatchSnapshot()