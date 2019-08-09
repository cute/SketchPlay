/*
 *
 *  This is a plugin for Sketch App http://bohemiancoding.com/sketch/
 *
 *  The plugin works by preview your artboards
 *
 *  It's the easiest and quickest way to preview your Sketch work on iPhone/iPad
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                     *
 *  Read more at http://liguangming.com/SketchPlay     *
 *                                                     *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  Plugin by Li Guangming http://liguangming.com
 *
 *
 *  Version 0.1
 *
 */

var onRun = function(context){
    var doc = context.document;
    var command = context.command;
    var identifier = [command identifier];
    var version = [[command pluginBundle] version];
    var resourcesPath = [[[command pluginBundle] url] path];
    var manager;

    if (!NSClassFromString(@"SKPluginManager")) {
        var mocha = [Mocha sharedRuntime];
        var icon = [[NSImage alloc] initByReferencingFile:resourcesPath + "/Contents/Resources/icon.png"];
        [mocha loadFrameworkWithName:@"SketchPlayPlugin" inDirectory:resourcesPath + "/Contents/Resources"];
        manager = [SKPluginManager manager];
        [manager setIcon:icon];
        [manager search];
    } else{
        manager = [SKPluginManager manager];
    }

    if (identifier == "check-update-command"){
        [manager checkForUpdates:version];
    } else if(identifier == "preview-command"){
        [manager previewArtboards];
    } else if(identifier == "create-toolbar-command"){
        [manager setToolbarHidden:true];
    } else if(identifier == "toggle-toolbar-command"){
        [manager toggleToolbarVisiblity];
    }
}
