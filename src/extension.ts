import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand(
		'vscode-workspace-file.echoWorkspace', () => {
			const workspace = vscode.workspace.workspaceFile;
			if (workspace) {
				vscode.window.showInformationMessage(`Workspace File: ${workspace}`);
			} else {
				vscode.window.showErrorMessage(`No Workspace File Present.`);
			}
		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() { }
